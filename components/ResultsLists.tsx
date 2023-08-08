import { PageResult } from "@/typings";
import Link from 'next/link';

type Props = {
    results: PageResult[];
    term: string;
};

export default function ResultsLists({results, term}: Props) {
  return (
    <div> 
      <div>
        {results.map((pageResult) => (
            <div key={pageResult.job_id} className="space-y-2">
                {pageResult.content.results.filters?.map((filter, i) => (
                    <div key={i} className="border rounded-r-lg md:rounded-lg p-5">
                        <p className="font-bold">{filter.name}</p>
                        <div>
                        {filter.values.map((value) => (
                            <Link prefetch={false} href={`https://www.google.com/${value.url}`}>
                            {value.value}
                            </Link>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}
