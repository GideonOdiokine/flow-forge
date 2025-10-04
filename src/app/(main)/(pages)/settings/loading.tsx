import { Spinner } from '@/components/global/spinner';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 animate-pulse p-6">
      <Spinner/>
    </div>
  );
}
