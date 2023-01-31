
import { trpc } from '../utils/trpc'
import { useForm } from "react-hook-form";

export default function Home() {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const booksQuantityQuery = trpc.booksQuantity.useQuery();
  const { mutateAsync: createBook } = trpc.createBook.useMutation()

  if (booksQuantityQuery.isLoading) {
    return (
      <div>
        Carregando...
      </div>
    )
  }
  if (booksQuantityQuery.isError) {
    return (
      <div className="text-center">
        Erro...
      </div>
    )
  }

  const onSubmit = async (data: any) => {
    const res = await createBook(data)
    console.log(res);
  }

  return (
    <div className="text-center dark:m-10 m-12">
      <div>
        <p className='font-bold text-2xl'>{booksQuantityQuery.data?.counter}</p>

      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='m-2  flex flex-col text-start'>
            <label className='px-2 mx-2' htmlFor="">Title</label>
            <input className='p-2 m-2 w-96' type="text" {...register('title', { required: true, pattern: /d/g })} />
            {errors.title?.type === 'required' ? <p className='text-red-400'>Book's title is required.</p> : null}
            {errors.title?.type === 'pattern' ? <p className='text-red-400'>Nao esta no padrao.</p> : null}
          </div>
          <div className='m-2 flex flex-col text-start'>
            <label className='px-2' htmlFor="">Author</label>
            <input className='p-2 m-2 justify-center w-96' type="text" {...register('author', { required: true })} />
          </div>
          <div className='m-2  flex flex-col text-start'>
            <label className='px-2 mx-2' htmlFor="">Year</label>
            <input className='p-2 m-2 w-96' type="text" {...register('year', { required: true })} />
          </div>
          <div className='text-start'>
            <button className='py-2 px-8 m-4 bg-white text-black font-semibold hover:bg-slate-300'>SAVE</button>

          </div>
        </form>
      </div>

    </div>
  )
}
