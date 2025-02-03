import {useSearchParams} from "react-router-dom";
import {FC, memo} from "react";
import './PaginationComponent.css';

type Props = {
    skip: number,
    total: number,
}

export const PaginationComponent: FC<Props> = memo(({skip, total}) => {
    const [query, setQuery] = useSearchParams({limit: '5', skip: '0'});

    const amountHandler = (delta:number) => {
        const skip:number = Number(query.get('skip'))
        setQuery({skip: (skip + delta).toString()})
    }

    return (
        <div className={'pagination-button'}>
            <button onClick={() => amountHandler(-5)} disabled={skip === 0}>PREVIOUS</button>
            <button onClick={() => amountHandler(5)} disabled={skip > total - 5}>NEXT</button>
        </div>
    );
});