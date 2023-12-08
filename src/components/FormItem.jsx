const FormItem = ({ label, children }) => {
  return (
    <div>
      <label
        className="form-label"
        title={label}
        htmlFor={label}>
        {label}:
      </label>
      {children}
    </div>
  )
};

export default FormItem
