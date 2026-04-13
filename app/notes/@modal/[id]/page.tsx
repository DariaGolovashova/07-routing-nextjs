"use client";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <NotePreview />
    </Modal>
  );
}
export default Page;
