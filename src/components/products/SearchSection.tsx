import { ReactElement, useRef, FormEvent, ChangeEvent, memo } from 'react';

interface Props {
  onSubmit: (input: string) => void;
  onChangeCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Search = ({ onSubmit, onChangeCategory }: Props): ReactElement => {
  const inputValue = useRef<string>('');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(inputValue.current.toLowerCase());
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.target.value;
  };

  return (
    <div className="flex mt-8 md:mt-14 mx-4 md:mx-8">
      <form onSubmit={handleSubmit} className="rounded-full px-5 py-2 w-[50%] md:w-[30%] border-2 flex items-center">
        <button type="submit" onSubmit={handleSubmit} className="">
          <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </button>
        <input type="text" onChange={onInputChange} className="outline-0 pl-4 w-full" />
      </form>
      <select
        name="categories"
        id="categories"
        className="w-[50%] md:w-[30%] outline-0 ml-8 md:ml-16 bg-white border-b px-2"
        onChange={onChangeCategory}
        defaultValue="category"
      >
        <option value="category" disabled className="capitalize">Category</option>
        <option value="electronics" className="capitalize">Electronics</option>
        <option value="jewelery" className="capitalize">Jewelery</option>
        <option value="men's clothing" className="capitalize">{'Men\'s Clothing'}</option>
        <option value="women's clothing" className="capitalize">{'Women\'s Clothing'}</option>
      </select>
    </div>
  );
};
export default memo(Search);
