import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import palette from '../../lib/styled/palette';

const TagBoxBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4{
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256;
    border: 1px solid ${palette.gray[9]}; /*스타일 초기화*/
    input,
    button{
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input{
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover{
            background: ${palette.gray[6]};
        }
    }
`;

const Tag = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`;

const TagListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

//React.memo를 사용해 tag값이 바뀔 경우에만 리렌더링
const TagItem = React.memo(({tag, onRemove}) => <Tag onClick={()=>onRemove(tag)}>#{tag}</Tag>);

//React.memo를 사용해 tags값이 바뀔 경우에만 리렌더링
const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlock>
));

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if (!tag) return; //입력 문자가 공백인 경우
            if(localTags.includes(tag)) return; //이미 존재할 경우
            setLocalTags([...localTags, tag]);
        }, [localTags]
    );

    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !== tag));
        },[localTags],
    )

    const onChange = useCallback(e=>{
        setInput(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        insertTag(input.trim()) //앞뒤 공백을 없앰
        setInput(''); //input 초기화
    }, [input, insertTag]);
    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <input value={input} onChange={onChange} placeholder='태그를 입력하세여' />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove}/>
        </TagBoxBlock>
    );
};

export default TagBox;