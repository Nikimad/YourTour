import Section from "../Section";
import Form from "../Form";

const CreateTour = () => {
  return (
    <Section
      id="create-tour"
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      className="container"
    >
      <Form />
    </Section>
  );
};

export default CreateTour;
