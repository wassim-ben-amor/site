import { Separator } from "@/components/ui/separator";
import { PostsSection } from "./components/PostsSection";
import { ProfileHeroSection } from "./components/ProfileHeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-full mt-10 sm:mt-16 lg:mt-20">
      <div className="flex flex-col">
        <ProfileHeroSection />
        <Separator className="my-12 h-0" />
        <div className="flex text-sm gap-4 flex-wrap lg:flex-nowrap">
          <WorkSection />
          <div className="flex flex-col gap-4 flex-1">
            <SkillsSection />
            <PostsSection />
          </div>
        </div>
        <Separator className="my-8 h-0" />
        <ProjectsSection />
        <Separator className="my-8 h-0" />
        <ContactSection />
      </div>
    </main>
  );
}
