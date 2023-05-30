import {Router, Request, Response } from "express"
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieController";

// validações
import {validate} from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API funcionando..");
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", findMovieById)
.get("/allmovies", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", movieCreateValidation(), validate, updateMovie)