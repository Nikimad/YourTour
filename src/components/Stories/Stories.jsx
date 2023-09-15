import "./Stories.css";
import Section from "../Section";
import Story from "../Story";

const Stories = () => (
  <Section
    id="stories"
    title="Истории путешествий"
    subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    className="container"
  >
    <div className="stories">
        <Story
          title="Автостопом в Стамбул"
          linkHref="/story1"
          coverImg="/assets/images/story-1.jpg"
          socials={["instagram", "facebook", "YouTube"]}
        >
          <p>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений:
          </p>
          <ul>
            <li>вкусная еда</li>
            <li>дешевый транспорт</li>
            <li>красивый город</li>
          </ul>
        </Story>
        <Story
          title="Автостопом в Стамбул"
          linkHref="/story2"
          coverImg="/assets/images/story-2.jpg"
          socials={["instagram", "ВКонтакте"]}
        >
          <p>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений.
          </p>
        </Story>
        <Story
          title="Автостопом в Стамбул"
          linkHref="/story3"
          coverImg="/assets/images/story-3.jpg"
          socials={["instagram", "facebook", "ВКонтакте"]}
        >
          <p>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений.
          </p>
        </Story>
    </div>
  </Section>
);

export default Stories;
