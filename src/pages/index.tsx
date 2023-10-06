import Head from "next/head";
import { Card } from "~/components/card.component";
import { Form } from "~/components/form.component";
import { TodoList } from "~/components/todo-list.component";
import { api } from "~/utils/api";

export default function Home() {
  const todosQuery = api.todo.getAll.useQuery();

  if (todosQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Card>
          <Form />
          <TodoList todos={todosQuery.data ?? []} />
        </Card>
      </main>
    </>
  );
}
