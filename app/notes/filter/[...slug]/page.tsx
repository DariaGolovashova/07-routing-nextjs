import { fetchNotes } from "@/lib/api";
import type { Note } from "@/types/note";

interface PropsNotePage {
  params: {
    slug?: string[];
  };
}

async function NotePage({ params }: PropsNotePage) {
  const tag = params.slug?.[0];
  const filters = tag && tag !== "all" ? { search: tag } : {};

  const { notes } = await fetchNotes(filters);
  //   const notesResponse = await fetchNotes(
  //     tag && tag !== "all" ? { tag: undefined } : {},
  //   );
  //   const notes: Note[] = notesResponse.notes;
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </div>
  );
}
export default NotePage;
