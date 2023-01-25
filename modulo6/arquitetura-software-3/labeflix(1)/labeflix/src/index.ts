import { app } from "./app"
import { userRouter } from "./routes/userRouter"
import { taskRouter } from "./routes/taskRouter"

app.use("/user", userRouter)

app.task("/task", taskRouter)

