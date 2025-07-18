function TextField({ name, type, register, validationSchema }) {
  // console.log(register(name));
  
  return (
    <input
    {...register(name, validationSchema)}
      id={name}
      className="textField__input  w-full md:w-auto"
      type={type}
      autoComplete="off"
    />
  );
}

export default TextField;
