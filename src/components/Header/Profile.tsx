import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arthur Hendrich</Text>
          <Text color="gray.300" fontSize="small">
            arthuralenc@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Arthur Hendrich"
        src="https://github.com/ArthurHendrich.png"
      />
    </Flex>
  );
}
