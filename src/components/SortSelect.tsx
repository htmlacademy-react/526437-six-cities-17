import { useEffect, useState } from 'react';

type TSelectItem = {title: string; type: string}

type TProps= {
    selectItems: TSelectItem[];
    selectedItem: TSelectItem;
    onSelect: (value: string) => void;
}
export default function SortSelect(props: TProps){
  const [showSelect, setShowSelect] = useState(false);
  useEffect(()=> {
    const clickListener = (e: MouseEvent) => {
      if(e.target){
        const obj = e.target as HTMLElement;
        const classes = obj.classList[0]?.includes('places__sorting');
        if(!classes){
          setShowSelect(false);
        }
      }
    };
    if(showSelect){
      window.addEventListener('click', clickListener);
    }
    return () => window.removeEventListener('click', clickListener);
  });
  const {selectedItem, selectItems, onSelect} = props;
  const handleClick = (type:string) => {
    setShowSelect(!showSelect);
    onSelect(type);
  };
  const css = `.form_style {display: flex;
    justify-content: flex-start;
    width: max-content;}`;
  return (
    <form className="places__sorting form_style" >
      <style>{css}</style>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={()=> setShowSelect(!showSelect)}
      >
        {selectedItem.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {showSelect &&
      <ul className="places__options places__options--custom places__options--opened">
        {selectItems.map((item, index) =>
          (
            <li className={`places__option places__option${item.type === selectedItem.type
              ? '--active'
              : ''}`}
            key={item.title}
            tabIndex={index}
            onClick={()=> handleClick(item.type)}
            >
              {item.title}
            </li>)
        )}
      </ul>}
    </form>
  );

}
