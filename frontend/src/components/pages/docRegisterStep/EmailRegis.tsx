import React from "react";
import FormWrapper from "../FormWrapper";

type EmailRegisData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type EmailInfoRegisProps = EmailRegisData & {
  updateFields: (fields: Partial<EmailRegisData>) => void;
};

export function EmailRegis({
  email,
  password,
  confirmPassword,
  updateFields, // Add the missing prop here
}: EmailInfoRegisProps) {
  return (
    <FormWrapper title="3/3 Email and Password">
      <div className="my-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="username"
          required
        />
      </div>
      <div className="my-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Passwords
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
        />
      </div>
      <div className="my-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirm Passwords
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => updateFields({ confirmPassword: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
          required
        />
      </div>
    </FormWrapper>
  );
}
