import "./Stories.css";
import Section from "../Section/Section";
import Story from "../Story/Story";
import story1 from "../assets/images/story-1.jpg";
import story2 from "../assets/images/story-2.jpg";
import story3 from "../assets/images/story-3.jpg";

const Stories = () => {
  return (
    <Section
      id="stories"
      title="Истории путешествий"
      subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
    >
      <ul className="stories">
        <li>
          <Story
            title="Автостопом в Стамбул"
            linkHref="/story1"
            coverImg={story1}
            socials={["instagram", "facebook", "YouTube"]}
          >
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений:
            </p>
            <ul>
              <li>вкусная еда</li>
              <li>дешевый транспорт</li>
              <li>красивый город</li>
            </ul>
          </Story>
        </li>
        <li>
          <Story
            title="Автостопом в Стамбул"
            linkHref="/story2"
            coverImg={story2}
            socials={["instagram", "ВКонтакте"]}
          >
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
          </Story>
        </li>
        <li>
          <Story
            title="Автостопом в Стамбул"
            linkHref="/story3"
            coverImg={story3}
            socials={["instagram", "facebook", "ВКонтакте"]}
          >
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
          </Story>
        </li>
      </ul>
    </Section>
  );
};

export default Stories;
