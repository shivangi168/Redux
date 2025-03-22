import FormValidation from "../components/FormValidation";

function FormPage() {
  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>React Form Example</h2>
      <FormValidation onSubmit={handleFormSubmit} />
    </div>
  );
}

export default FormPage;
