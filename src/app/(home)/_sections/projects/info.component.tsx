import { ProjectShare } from "@/data/projects.data";
import { Share } from "./share.component";

type Props = {
  dates?: Array<string>;
  share?: Partial<ProjectShare>;
};

export const Info = ({ dates, share }: Props) => (
  <div className="flex items-center justify-between">
    {dates && (
      <div className="flex gap-2">
        {dates.map((date) => (
          <div key={date}>
            <div className="inline-block p-2 bg-blend-darken bg-nassa-900 bg-opacity-35 rounded-md text-xs text-nassa-100">
              {date.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    )}

    {share && <Share share={share} />}
  </div>
);
