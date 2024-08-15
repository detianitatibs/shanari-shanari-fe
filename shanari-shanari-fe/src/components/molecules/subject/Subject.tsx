import ObjectSubtitle from "@/components/atoms/object-subtitle/ObjectSubtitle";
import BorderHorizon from "@/components/atoms/border-horizon/BorderHorizon";

interface Props {
  object_color: string;
  subject_name: string;
}

const Subject = ({ object_color, subject_name }: Props) => {
  return (
    <>
      <div className="flex">
        <ObjectSubtitle color={object_color}></ObjectSubtitle>
        <div className="text-size2 font-bold ml-2">{subject_name}</div>
      </div>
      <BorderHorizon></BorderHorizon>
    </>
  );
};

export default Subject;
