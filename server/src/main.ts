import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule);

    app.listen(PORT ? Number(PORT) : 5000, () =>
      console.log(`Server startted on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};

start();
