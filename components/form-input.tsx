export default function FormInput({ data }: {
    data: {
        label: string;
        input_name: string;
        placeholder: string;
        type: string;
        required: boolean;
    };
}) {
    const { label, input_name, type, placeholder, required } = data;
    return (
        <div className="mb-5">
            <label htmlFor={input_name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                name={input_name}
                type={type}
                id={input_name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}
