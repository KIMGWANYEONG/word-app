import { Button, Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import sampleData from "../assets/sampleData.json";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const [wordsData, setWordsData] = useState<IWords[]>(sampleData);
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" maxW={768} mx="auto" minH="100vh">
      <Text fontSize={48} fontWeight="bold" textAlign="center" mt={8}>
        Word App
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            colorScheme="green"
            justifyContent="start"
            isTruncated={true}
            onClick={() => navigate(`/daily-word/${v.day}`)}
          >
            <Text fontWeight="bold">Day {v.day}</Text> - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
