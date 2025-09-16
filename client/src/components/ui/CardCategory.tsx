import { formatDate } from "@/lib/utilities/markdown-utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card-lib";

export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Card className="w-[350px] h-[290px] shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
}
