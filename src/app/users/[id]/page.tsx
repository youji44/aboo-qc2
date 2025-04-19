import UserDetails from './UserDetails';

export default function UserPage({
  params,
}: {
  params: { id: string };
}) {
  return <UserDetails userId={Number(params.id)} />;
} 