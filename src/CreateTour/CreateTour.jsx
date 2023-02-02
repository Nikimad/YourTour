import Section from "../Section/Section";
import FormContainer from "../Form";

const CreateTour = () => {
  return (
    <Section
      id="create-tour"
      title="Собери свой тур"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
      className="container"
    >
      <FormContainer />
    </Section>
  );
};

export default CreateTour;
