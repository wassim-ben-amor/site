import { Separator } from "@/components/ui/separator";
import { PostsSection } from "./components/PostsSection";
import { ProfileHeroSection } from "./components/ProfileHeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WorkSection } from "./components/WorkSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col mt-10 sm:mt-16 lg:mt-20">
      <ProfileHeroSection />
      <Separator className="my-6 md:my-12 h-0" />
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <WorkSection />
        <div className="flex flex-col gap-4 flex-1">
          <SkillsSection />
          <PostsSection />
        </div>
      </div>
      <Separator className="my-10 h-0" />
      <ProjectsSection />
      <Separator className="my-10 h-0" />
      <ContactSection />
    </div>
  );
}
