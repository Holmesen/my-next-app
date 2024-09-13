
type Props = {
  children: React.ReactNode;
  params: {
    id: string;
  }
};

export default function Layout({ children }: Props) {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full py-20 rounded-lg">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}