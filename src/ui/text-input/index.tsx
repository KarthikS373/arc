import React, { useEffect, useRef } from "react"

import clsx from "clsx"
import { PiWarningCircleFill } from "react-icons/pi"
interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
  value: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>["value"]
  name: string
  className?: string
  element?: "input" | "textarea"
  id?: string
  errorMessage?: string | null
}
/**
 * TextInput component
 *
 * A reusable input component for text and textarea fields in a React application.
 *
 * @component
 * @example
 * <TextInput
 *   value={value}
 *   onChange={handleChange}
 *   placeholder="Enter text"
 *   type="text"
 *   name="text-input"
 *   className="custom-class"
 *   element="input"
 *   id="text-input"
 *   errorMessage="Invalid input"
 * />
 *
 * @param {object} props - The component props
 * @param {function} props.onChange - The change event handler for the input field
 * @param {string} props.placeholder - The placeholder text for the input field
 * @param {string} props.type - The type of the input field
 * @param {string} props.value - The value of the input field
 * @param {string} props.name - The name of the input field
 * @param {string} props.className - The additional CSS class for the input field
 * @param {string} props.element - The type of the input element (input or textarea)
 * @param {string} props.id - The ID of the input field
 * @param {string} props.errorMessage - The error message to display for invalid input
 * @param {function} props.onKeyUp - The key up event handler for the input field
 * @param {function} props.onKeyPress - The key press event handler for the input field
 * @param {function} props.onBlur - The blur event handler for the input field
 * @param {string} props.pattern - The pattern attribute for input validation
 * @param {function} props.onInvalid - The invalid event handler for the input field
 * @returns {JSX.Element} The rendered TextInput component
 */
const TextInput: React.FC<Props> = ({
  onChange,
  placeholder,
  type,
  value,
  name,
  className,
  element,
  id,
  errorMessage,
  onKeyUp,
  onKeyPress,
  onBlur,
  pattern,
  onInvalid,
}: Props): JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (element === "textarea" && textAreaRef.current) {
      textAreaRef.current.style.height = "0px"
      const scrollHeight = textAreaRef.current.scrollHeight
      textAreaRef.current.style.height = `${Math.max(scrollHeight, 60)}px`
    }
  }, [textAreaRef.current, value])

  return (
    <div className="relative flex w-full flex-col items-start">
      {!element || element === "input" ? (
        <input
          onKeyUp={onKeyUp}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          className={clsx(
            `flex w-full flex-row items-center border-[0.01px] border-[#505054] px-[12px] py-[9px] shadow-sm focus:outline-none ${className}`,
            errorMessage ? "border-accent-6 focus:border-accent-6 focus:shadow-accent-6" : ""
          )}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
          autoComplete="off"
          spellCheck={false}
          pattern={pattern}
          onInvalid={onInvalid}
        />
      ) : (
        <textarea
          onKeyUp={onKeyUp}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={id}
          className={clsx(
            `flex w-full flex-row items-center border-[0.01px] border-[#505054] px-[12px] py-[9px] focus:outline-none ${className}`,
            errorMessage ? "border-accent-6 focus:border-accent-6 focus:shadow-accent-6" : ""
          )}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
          autoComplete="off"
          spellCheck={false}
          onInvalid={onInvalid}
          ref={textAreaRef}
        ></textarea>
      )}
      {errorMessage ? (
        <span className="flex items-center gap-1 p-1 text-[12px] text-accent-6">
          <PiWarningCircleFill />
          <div>{errorMessage}</div>
        </span>
      ) : null}
    </div>
  )
}

export default TextInput
