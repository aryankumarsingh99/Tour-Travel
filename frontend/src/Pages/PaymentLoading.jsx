import { motion } from "framer-motion";

function PaymentLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg text-center"
      >
        {/* Spinner */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-12 sm:w-14 h-12 sm:h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">
          Processing Payment
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600">
          Please wait while we securely confirm your payment.
        </p>

        {/* Progress Steps */}
        <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left text-xs sm:text-sm md:text-base">
          <div className="flex items-center gap-2 text-green-600">
            ✔ Validating payment details
          </div>
          <div className="flex items-center gap-2 text-green-600">
            ✔ Connecting to bank
          </div>
          <div className="flex items-center gap-2 text-gray-400 animate-pulse">
            ⏳ Finalizing transaction
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-4 sm:mt-6">
          Do not refresh or press back
        </p>
      </motion.div>
    </div>
  );
}

export default PaymentLoading;