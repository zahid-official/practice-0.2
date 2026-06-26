interface IProps {
  params: Promise<{ id: string }>;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

// getPost Function
const getPost = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const data: IPost[] = await res.json();
  return data;
};

// getAlbum Function
const getAlbum = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  if (!res.ok) throw new Error("Failed to fetch album");
  const data: IAlbum[] = await res.json();
  return data;
};

// UserProfilePage Component
const UserProfilePage = async ({ params }: IProps) => {
  const { id } = await params;

  const [posts, albums] = await Promise.all([getPost(id), getAlbum(id)]);

  return (
    <div className="space-y-4">
      <h1>Welcome to the UserProfilePage Component</h1>

      <div>
        <h2 className="text-3xl font-semibold underline text-center">Posts</h2>
        <ul className="list-decimal list-inside mx-8 py-10 grid grid-cols-4 gap-5">
          {posts.map((post) => (
            <li className="space-y-2 border p-4" key={post.id}>
              {post.title}
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold underline text-center">Albums</h2>
        <ul className="list-decimal list-inside mx-8 py-10 grid grid-cols-4 gap-5">
          {albums.map((album) => (
            <li className="space-y-2 border p-4" key={album.id}>
              {album.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
