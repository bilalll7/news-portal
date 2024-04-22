import { Link } from "@inertiajs/react";
const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join">
            {prev && (
                <Link href={prev} className="btn join-item">
                    «
                </Link>
            )}
            <Link className="btn join-item">{current}</Link>

            {next && (
                <Link href={next} className="btn join-item">
                    »
                </Link>
            )}
        </div>
    );
};
export default Paginator;
