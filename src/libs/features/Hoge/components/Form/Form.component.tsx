import { useFieldArray, useForm } from 'react-hook-form';

// function hogeApi() {
//   return {
//     hoge: [
//       { value: 100 },
//       { value: 0 },
//       { value: 10 },
//       { value: 50 }
//     ]
//   };
// }

// 呼び出し元でhogeApi()を実行し、レスポンスをpropsで渡す
export const Form = ({ hoge }: { hoge: { value: number }[] }) => {
  hoge = [{ value: 100 }, { value: 0 }, { value: 10 }, { value: 50 }];
  const defaultValues = { hoge };
  const {
    control,
    register,
    formState: { isDirty },
  } = useForm<{ hoge: { value: number }[] }>({
    defaultValues,
  });

  const { fields } = useFieldArray({
    name: 'hoge',
    control,
  });

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <input {...register(`hoge.${index}.value`)} />
        </div>
      ))}
      <button disabled={!isDirty}>更新</button>
    </form>
  );
};
