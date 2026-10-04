import "./Stories.css";
import Section from "../Section";
import Story from "../Story";
import { stories } from "../../data/stories";

const Stories = () => (
  <Section
    id="stories"
    title="Истории путешествий"
    subtitle="Реальные рассказы тех, кто уже вернулся: с маршрутами, бюджетами и советами"
    className="container"
  >
    <div className="stories">
      {stories.map(({ slug, title, cover, text, list }) => (
        <Story key={slug} title={title} linkHref="#create-tour" coverImg={cover}>
          <p>{text}</p>
          {list && (
            <ul>
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Story>
      ))}
    </div>
  </Section>
);

export default Stories;