import React, { useEffect, useState } from "react";
import birdImage from "../assets/flappyBird/flappybird.png";
import backgroundImage from "../assets/flappyBird/flappybirdbg.png";
import topPipeImage from "../assets/flappyBird/toppipe.png";
import bottomPipeImage from "../assets/flappyBird/bottompipe.png";

export const FlappyBirdGame = () => {
  const [birdY, setBirdY] = useState(200); // Высота птицы
  const [gravity, setGravity] = useState(1); // Сила гравитации
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [pipes, setPipes] = useState<
    { top: number; bottom: number; x: number }[]
  >([]);
  const [birdVelocity, setBirdVelocity] = useState(0); // Скорость птицы
  const [passedPipes, setPassedPipes] = useState(new Set<number>()); // Чтобы отслеживать пройденные трубы

  useEffect(() => {
    if (isGameOver) return;

    // Обработчик нажатия
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setBirdVelocity(-10); // Подниматься при нажатии на пробел
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    // Интервал игры
    const gameInterval = setInterval(() => {
      setBirdY((prev) => prev + birdVelocity); // Птица движется
      setBirdVelocity((prev) => prev + gravity); // Гравитация увеличивает скорость

      // Столкновение с землей
      if (birdY > 400) {
        setBirdY(400);
        setIsGameOver(true);
        clearInterval(gameInterval);
      }

      // Двигаем трубы
      setPipes((prev) =>
        prev.map((pipe) => ({
          ...pipe,
          x: pipe.x - 2,
        })),
      );

      // Добавляем новые трубы
      const pipeGap = 200; // Промежуток между трубами
      if (pipes.length === 0 || pipes[pipes.length - 1].x < 300) {
        const newPipeHeight = Math.floor(Math.random() * (400 - pipeGap)); // Высота верхней трубы
        setPipes((prev) => [
          ...prev,
          {
            top: newPipeHeight,
            bottom: newPipeHeight + pipeGap, // Нижняя труба будет отстоять на 200 пикселей ниже
            x: 800,
          },
        ]);
      }

      // Проверка на проход между трубами
      pipes.forEach((pipe, index) => {
        if (
          birdY > pipe.top &&
          birdY < pipe.bottom &&
          pipe.x < 100 &&
          !passedPipes.has(index)
        ) {
          setScore((prev) => prev + 1); // Увеличиваем счет
          setPassedPipes((prev) => new Set(prev).add(index)); // Отмечаем трубу как пройденную
        }
      });

      // Проверяем столкновение с трубами
      pipes.forEach((pipe) => {
        if (birdY < pipe.top || birdY > pipe.bottom) {
          if (pipe.x > 100 && pipe.x < 150) {
            setIsGameOver(true);
            clearInterval(gameInterval);
          }
        }
      });

      // Удаляем трубы, которые ушли за экран
      setPipes((prev) => prev.filter((pipe) => pipe.x > 0));
    }, 20);

    return () => {
      clearInterval(gameInterval);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [birdY, birdVelocity, pipes, gravity, isGameOver, passedPipes]);

  const restartGame = () => {
    setBirdY(200);
    setBirdVelocity(0);
    setIsGameOver(false);
    setScore(0);
    setPipes([]);
    setPassedPipes(new Set());
  };

  if (isGameOver) {
    return (
      <div className="text-center text-3xl font-bold">
        Game Over! Your score is {score}
        <button
          onClick={restartGame}
          className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] w-full bg-blue-400">
      <img
        src={backgroundImage}
        alt="background"
        className="bg-moving absolute top-0 left-0 h-full w-full object-cover"
      />
      <div
        style={{
          top: `${birdY}px`,
          left: "100px",
          width: "30px",
          height: "30px",
          backgroundImage: `url(${birdImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute"
      ></div>

      {/* Трубопровод */}
      {pipes.map((pipe, index) => (
        <React.Fragment key={index}>
          <div
            className="absolute"
            style={{
              top: `${pipe.top}px`,
              left: `${pipe.x}px`,
              width: "50px",
              height: "150px",
              backgroundImage: `url(${topPipeImage})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute"
            style={{
              top: `${pipe.bottom}px`,
              left: `${pipe.x}px`,
              width: "50px",
              height: "150px",
              backgroundImage: `url(${bottomPipeImage})`,
              backgroundSize: "cover",
            }}
          ></div>
        </React.Fragment>
      ))}

      <div className="absolute top-4 left-4 text-xl text-white">
        Score: {score}
      </div>
    </div>
  );
};
