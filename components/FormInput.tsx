// export interface FormInputProps {
//   type InputProps = JSX.IntrinsicElements['input']
//   type Props = InputProps & { labelText: string }
// }

// export const FormInput: React.FC<FormInputProps> = ({
//   ...props
// }) => {
//   const { label, ...inputProps } = props
//   return (
//     <div className="mb-4">
//       <label
//         className={`block text-gray-700 text-sm font-bold mb-2`}
//         for={`${label}`}>
//         {label}
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" {...inputProps}/>
//     </div>
//   )
// }
