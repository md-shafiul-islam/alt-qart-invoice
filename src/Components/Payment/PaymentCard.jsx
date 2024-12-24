import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDateMonthYear,
  isEmptyOrNull,
  onNotifyError,
} from "../../utils/helper";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Spin } from "antd";

const PaymentCard = ({ ...props }) => {
  const params = useParams();

  const stripe = useStripe();
  const elements = useElements();

  const axiosSecure = useAxiosSecure();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const [employee, setEmployee] = useState(undefined);

  const handleError = (error) => {
    console.log("error, ", error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || isDisable) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      //   handleError(submitError);
      console.log("submitError ", submitError);
      return;
    }

    setIsLoading(true);

    const respIntent = await axiosSecure.post(`/payments/create-intent`, {
      id: params?.id,
      date: getDateMonthYear(new Date()),
    });

    console.log("Keys ", respIntent.data?.response);
    if (isEmptyOrNull(respIntent.data?.response?.key)) {
      onNotifyError(respIntent.data?.response.message);
      setIsDisable(true);
      setIsLoading(false);
      return;
    } else {
      setIsDisable(false);
    }

    // Use the clientSecret and Elements instance to confirm the setup
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret: respIntent.data?.response?.key,
      confirmParams: {
        return_url: `http://localhost:5173/administrator/payments/paid-complete`,
      },
      // Uncomment below if you only want redirect for redirect-based payments
      redirect: "if_required",
    });

    if (error) {
      handleError(error);
    }

    if (paymentIntent) {
      setIsLoading(false);
      console.log("paymentIntent ", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        const {
          id,
          amount,
          created,
          currency,
          description,
          payment_method_types,
          status,
          ...payment
        } = paymentIntent;

        const date = new Date();

        axiosSecure
          .post(`/payments`, {
            transactionId: id,
            amount,
            transactionTime: new Date(created),
            description,
            methodType: payment_method_types[0],
            status,
            createIn: date,
            monthYear: getDateMonthYear(date),
            user: respIntent.data?.response?.employee?._id,
            userEmail: respIntent.data?.response?.employee?.email,
          })
          .then((resp) => {
            console.log("Payment Successfully, ", resp.data);
          })
          .catch((error) => console.log("Payment Error, ", error));
      }
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="self-start h-8"
        >
          <div
            id="button-text"
            className="  text-white flex flex-row justify-center items-center"
          >
            {isLoading ? (
              <div className="spinner " id="spinner">
                <Spin size="small" />
              </div>
            ) : (
              <span
                className={`font-medium h-full w-28 bg-teal-700 hover:bg-teal-900  shadow-md py-1 px-4 ${
                  isDisable ? "cursor-not-allowed" : ""
                }`}
              >
                Pay now
              </span>
            )}
          </div>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};

export default PaymentCard;
