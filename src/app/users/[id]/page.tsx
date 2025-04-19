import UserDetails from '@/components/UserDetails';

interface PageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: PageProps) {
  return <UserDetails userId={Number(params.id)} />;
} 