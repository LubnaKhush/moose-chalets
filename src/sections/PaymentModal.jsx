// components/PaymentModal.js

const PaymentModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-96">
          <h2 className="text-xl font-bold mb-4">Payment Options</h2>
          <p className="mb-4">Please select your preferred payment method:</p>
          <div className="mb-4">
            <h3 className="font-semibold">1. Cash by Hand</h3>
            <p>You can pay the amount directly in cash.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">2. Bank Transfer</h3>
            <p>
              Please transfer the payment to the following account:
              {" "}
              <br />
              <strong>Account Title: Moose Chalet
                <br />
              IBAN:PK06MPBL0285027140144806</strong>
            </p>
            <p className="">
              After the transfer, please keep a screenshot of the payment and attach in booking form.
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            After you submit your booking, you will receive a confirmation
            email. If you do not receive it, please email us at{" "}
            <strong>moosechalet@gmail.com</strong> with a screenshot of your
            payment. We will respond to you as soon as possible.
          </p>
          <button
            onClick={onClose}
            className="mt-4 bg-heading text-white rounded p-2 w-full hover:bg-subHeading"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
