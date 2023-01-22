import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BS Computer Science",
    desc: "Lahore Garrison University, Pakistan | 2014 ~ 2018",
  },
  {
    title: "Research in Computer & Systems Engineering (M. Sc.)",
    desc: "Technische Universität Ilmenau, Germany | 2022 - 2024",
  },
  {
    title: "IELTS 7.0",
    desc: "British Council Pakistan | 2022",
  },
];

export default Education;
