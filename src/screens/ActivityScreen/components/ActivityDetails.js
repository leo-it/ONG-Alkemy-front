// Import React
import React, { useState } from 'react';

// Import Chakra
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

// Export Component
export default function ActivityDetails() {

    const [title, setTitle] = useState('Activity 1');
    const [imageUrl, setImageUrl] = useState('https://bemoacademicconsulting.com/storage/files/7D1dAKzDBgeQBoFo9gFvycwD0YsubBOZVhQqsFOy.jpeg');
    const [activityName, setActivityName] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus magna, molestie vitae libero et, pulvinar tincidunt sem. Duis fermentum venenatis mollis. Nam a aliquam dolor. Vestibulum rhoncus nibh ac enim laoreet mollis. Phasellus mollis elementum est at facilisis. Nulla facilisi. Donec vehicula auctor risus, quis mollis libero scelerisque eget. Vestibulum sit amet urna ut lacus mollis ornare vel vel tellus. Aliquam mi massa, pellentesque in elementum in, interdum nec metus. Maecenas id libero ac massa semper molestie in sed eros. Nam sit amet tempus metus. Etiam mattis justo et bibendum finibus. \nDonec scelerisque pellentesque sodales. Nunc egestas nulla sem, sed euismod odio vestibulum sed. Nunc nec laoreet enim, ac vulputate risus. Suspendisse cursus ex ac sodales tempor. Mauris quam neque, iaculis vitae placerat quis, semper quis mi. Aenean in imperdiet dui. Praesent nec dui ac lacus ultrices ultrices. \nAliquam quis lorem non odio hendrerit laoreet et porttitor velit. Quisque condimentum nec lacus at pulvinar. Aliquam erat volutpat. Nulla facilisi. Aenean nec nunc quis lectus vulputate viverra. In sodales ipsum nisi, sit amet venenatis est laoreet vel. Nam maximus neque mauris, a porta risus porttitor vitae. Curabitur interdum ornare odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas euismod massa et lectus semper commodo. Nulla sit amet aliquet eros. Donec accumsan lacinia condimentum. Suspendisse interdum a odio nec aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Praesent tincidunt interdum mi. \nMaecenas ante ex, iaculis quis tristique non, tempus a mauris. Curabitur pulvinar dolor in ex dictum, a molestie urna fermentum. Cras ut ex accumsan, efficitur turpis et, eleifend mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis aliquam quis enim eu feugiat. Nam at velit id sem egestas bibendum sit amet in nunc. Vestibulum ornare ante sit amet augue finibus ornare. Suspendisse ut fringilla turpis. Aliquam sodales molestie condimentum. Integer elementum nec ipsum vitae fringilla. Vestibulum iaculis leo in tincidunt consequat. Phasellus tempor lectus lectus, ut rhoncus est faucibus nec. Morbi id consectetur nibh. Integer pellentesque, massa vitae ultricies suscipit, elit nisi pulvinar nulla, sed aliquam sapien felis a magna. Vestibulum diam mi, faucibus vestibulum laoreet a, convallis a augue. Aenean tempor urna nulla, in semper mi gravida vel.');

    return (
        <Box maxW="800px" w="90vw">
            <Flex justify="center" mt="50px"><Heading>{title}</Heading></Flex>
            <Flex justify="center" mt="50px"><img src={imageUrl} alt="activity" /></Flex>
            <Flex justify="center" mt="50px"><Text textAlign="justify">{activityName}</Text></Flex>
        </Box>
    )
}
