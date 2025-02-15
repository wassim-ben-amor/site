import Image from "next/image";
import Link from "next/link";

import { DocumentIcon } from "@/components/icons/DocumentIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PostsSection = () => (
  <Card className="shadow-xs">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-primary/90">
        <DocumentIcon className="size-5 text-blue-500" />
        <span>Posts</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul>
        <li className="flex gap-4">
          <Link
            href="https://engineering.contentsquare.com/2021/serverside-webpage-screenshot/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 gap-2"
          >
            <Image
              src="/page-screenshot-article.jpg"
              alt="Article screenshot"
              className="rounded-md object-cover h-14"
              width={80}
              height={48}
            />
            <div className="flex flex-col gap-1 -mt-0.5">
              <span className="font-medium">
                Full page screenshots on the server side
              </span>
              <span className="font-normal text-primary/80">
                Showcasing the technical solution behind efficient server-side
                full-page screenshot capture.
              </span>
              <span className="font-light text-xs text-primary/60 mt-1">
                Sep 20, 2021
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </CardContent>
  </Card>
);
