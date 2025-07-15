import { CardProfile } from "@/components/CardProfile";

export default function ViewProfileStudentPage() {
  return (
    <div className="flex h-[85vh] items-center justify-center p-10">
      <CardProfile isStudent />
    </div>
  );
}
