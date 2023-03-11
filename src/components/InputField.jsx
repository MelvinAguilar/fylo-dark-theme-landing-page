const inputField = ({
  children,
  label,
  nameGroup,
  validation,
  innerRef,
  className = "",
  ...rest
}) => {
  return (
    <div className="flex-[2]">
      <input
        className={`min-h-12 w-full rounded-full border-2 border-white px-4 py-3 ${
          validation ? "!border-light-red" : ""
        } ${className}`}
        aria-label={label}
        name={nameGroup}
        {...rest}
        {...innerRef}
      />
      {children}
    </div>
  );
};

export default inputField;
