import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface InfoCardProps {
  children: React.ReactNode;
  title: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ children, title }) => {
  return (
    <Card className="bg-[#1c1b23] text-white border-transparent pb-6">
      <CardHeader>
        <CardTitle className="text-[#b5b5bd]">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default InfoCard;
