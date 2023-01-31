import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
    booksQuantity: procedure
        .query(async ({ ctx }) => {
            const books = await ctx.prisma.book.count()
            return {
                counter: `Quantidade de livros: ${books}`,
            };
        }),
    createBook: procedure
        .input(
            z.object({
                title: z.string(),
                author: z.string(),
                year: z.string()
            }),
        )
        .mutation(async ({ input, ctx }) => {
            await ctx.prisma.book.create({
                data: {
                    author: input.author,
                    title: input.title,
                    year: input.year
                }
            })
            return {
                status: `criado com sucesso`
            }
        })

});

// export type definition of API
export type AppRouter = typeof appRouter;