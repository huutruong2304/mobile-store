import { LuHouse } from 'react-icons/lu';
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/breadcrumb';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  List,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MOCK_IPHONE_DETAILS } from '@/db/mock-product-detail';
import ProductImageViewer from '@/components/product-image-viewer';
import { formatCurrency } from '@/utils/helper';
import { BoxIcon, CartIcon, IphoneIcon } from '@/components/icon/Icons';
import { MdOutlineSecurity } from 'react-icons/md';
import { HiReceiptTax, HiStar } from 'react-icons/hi';
import Image from 'next/image';
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/components/ui/accordion';
import { Prose } from '@/components/ui/prose';
import ReviewCard from '@/components/review-card';
import OverallReview from '@/components/overall-review';

const convertSpecificationsToStats = (specifications: any) => {
  const stats = [];

  // Thông số thiết kế
  stats.push({
    label: 'Kích thước',
    value: specifications.design.dimensions,
    helpText: '',
  });
  stats.push({
    label: 'Khối lượng',
    value: specifications.design.weight,
    helpText: '',
  });
  stats.push({
    label: 'Chất liệu thân máy',
    value: specifications.design.bodyMaterial,
    helpText: '',
  });

  // Thông số màn hình
  stats.push({
    label: 'Loại màn hình',
    value: specifications.display.type,
    helpText: '',
  });
  stats.push({
    label: 'Độ phân giải',
    value: specifications.display.resolution,
    helpText: '',
  });
  stats.push({
    label: 'Tần số quét',
    value: specifications.display.refreshRate,
    helpText: '',
  });
  stats.push({
    label: 'Độ sáng',
    value: specifications.display.brightness,
    helpText: '',
  });
  stats.push({
    label: 'Tính năng màn hình',
    value: specifications.display.features.join(', '),
    helpText: '',
  });

  // Thông số camera
  const { wide, telephoto, ultrawide } = specifications.camera.mainCamera;

  stats.push({
    label: 'Camera chính',
    value: `Rộng: ${wide.resolution} (khẩu độ: ${wide.aperture}), Tele: ${telephoto.resolution} (khẩu độ: ${telephoto.aperture}), Siêu rộng: ${ultrawide.resolution} (khẩu độ: ${ultrawide.aperture})`,
    helpText:
      'Rộng: ' +
      wide.features.join(', ') +
      '; Tele: ' +
      telephoto.features.join(', ') +
      '; Siêu rộng: ' +
      ultrawide.features.join(', '),
  });

  // Thông số khác
  stats.push({ label: 'Hệ điều hành', value: specifications.os, helpText: '' });
  stats.push({ label: 'Chipset', value: specifications.chipset, helpText: '' });
  stats.push({ label: 'CPU', value: specifications.cpu, helpText: '' });
  stats.push({ label: 'GPU', value: specifications.gpu, helpText: '' });
  stats.push({ label: 'RAM', value: specifications.memory.ram, helpText: '' });
  stats.push({
    label: 'Tùy chọn lưu trữ',
    value: specifications.memory.storage.join(', '),
    helpText: '',
  });
  stats.push({
    label: 'Dung lượng pin',
    value: specifications.battery.capacity,
    helpText: '',
  });
  stats.push({
    label: 'Sạc',
    value: specifications.battery.charging,
    helpText: '',
  });
  stats.push({
    label: 'Kết nối mạng',
    value: specifications.connectivity.network.join(', '),
    helpText: '',
  });
  stats.push({
    label: 'SIM',
    value: specifications.connectivity.sim,
    helpText: '',
  });
  stats.push({
    label: 'Khả năng chống nước',
    value: specifications.waterResistance,
    helpText: '',
  });

  return stats;
};

export default function Page() {
  const details = MOCK_IPHONE_DETAILS;

  const stats = convertSpecificationsToStats(details.specifications);

  const items = [
    {
      value: '1',
      title: 'Chính sách  và bảo hành',
      text: (
        <List.Root className="mb-5" gap="2" variant="plain">
          <List.Item>
            <List.Indicator>
              <IphoneIcon />
            </List.Indicator>
            <Text textStyle={'sm'}>
              Máy mới 100% , chính hãng Apple Việt Nam
            </Text>
          </List.Item>
          <List.Item>
            <List.Indicator>
              <BoxIcon />
            </List.Indicator>
            <Text textStyle={'sm'}>
              iPhone sử dụng iOS 18, Cáp Sạc USB‑C (1m), Tài liệu
            </Text>
          </List.Item>
          <List.Item>
            <List.Indicator>
              <MdOutlineSecurity size={24} />
            </List.Indicator>
            <Text textStyle={'sm'}>
              1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành
              12 tháng tại trung tâm bảo hành chính hãng Apple{' '}
              <Link className="text-red-500">(xem chi tiết)</Link> <br /> Xem
              thông tin kích hoạt bảo hành các sản phẩm Apple (tại đây)
            </Text>
          </List.Item>

          <List.Item>
            <List.Indicator>
              <HiReceiptTax size={24} />
            </List.Indicator>
            <Text textStyle={'sm'}>Giá sản phẩm đã bao gồm VAT</Text>
          </List.Item>
        </List.Root>
      ),
    },
    {
      value: '2',
      title: 'Thông số kĩ thuật',
      text: (
        <VStack className="px-2 gap-1" separator={<Separator />}>
          {stats.map(item => (
            <HStack key={item.label} className=" w-full items-start">
              <Box className="w-1/2">
                <Heading size={'md'} className="bold text-left">
                  {item.label}
                </Heading>
              </Box>
              <Box className="w-1/2">
                <Text textStyle={'sm'}>{item.value}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      ),
    },
    {
      value: '3',
      title: 'Bài viết đánh giá',
      text: (
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: details.content }} />
        </Prose>
      ),
    },
  ];

  return (
    <Box className="w-full p-2 ">
      {/* breadcrumb */}
      <BreadcrumbRoot className="py-2">
        <BreadcrumbLink href="/">
          <LuHouse /> Home
        </BreadcrumbLink>
        <BreadcrumbLink href="/smartphone">Smartphone</BreadcrumbLink>
        <BreadcrumbCurrentLink className="w-40 md:w-max truncate">
          {details.name}{' '}
        </BreadcrumbCurrentLink>
      </BreadcrumbRoot>
      <Box className="flex flex-col md:flex-row space-x-4">
        {/* product photo */}
        <Box className="py-1 w-full md:w-1/2">
          <ProductImageViewer
            images={details.images}
            features={details.keyFeatures}
          />
        </Box>
        <Box className="py-1 w-full md:w-1/2">
          {/* name */}
          <Box className="py-1">
            <Heading as={'h1'} size={'xl'} className="font-bold">
              {details.name}
            </Heading>

            <HStack>
              <Text textStyle={'sm'} className="py-1 text-neutral-500 ">
                Đã bán 71,5k
              </Text>
              <HStack>
                <HiStar className="text-yellow-400" />
                <Text textStyle={'sm'} className="py-1 text-neutral-500 ">
                  4.9
                </Text>
              </HStack>
            </HStack>
          </Box>
          {/* variants */}
          <Box className="py-0">
            <Heading size={'md'} className="font-bold pb-2">
              Storage
            </Heading>
            <Grid templateColumns={'repeat(3, 1fr)'} gap={2}>
              {details.variants.storage.map(item => (
                <GridItem
                  key={item.id}
                  className="max-w-44 h-16 border shadow rounded-xl flex flex-col justify-center items-center"
                >
                  <Heading size={'md'}>{item.value}</Heading>
                  <Text textStyle={'xs'}>{formatCurrency(item.price)}</Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box className="py-2">
            <Heading size={'md'} className="font-bold pb-2">
              Color
            </Heading>
            <Grid templateColumns={'repeat(3, 1fr)'} gap={2}>
              {details.variants.color.map(item => (
                <GridItem
                  key={item.id}
                  className="max-w-44 h-16 border shadow rounded-xl flex flex-row justify-center items-center"
                >
                  <HStack className="w-full justify-start">
                    <Box className="bg-white h-10 w-10 rounded-xl relative">
                      <Image
                        src={details.images[0]}
                        alt="iphone-16"
                        className="object-cover"
                        fill
                      />
                    </Box>
                    <Box>
                      <Heading size={'sm'}>{item.value}</Heading>
                      <Text textStyle={'xs'}>{formatCurrency(item.price)}</Text>
                    </Box>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </Box>
          {/* order now */}
          <Box className="py-2">
            <HStack className="py-1">
              <Button className="flex-1 bg-red-500  py-7 rounded-xl shadow">
                <Heading size={'lg'} className="font-bold uppercase">
                  Mua ngay
                </Heading>
              </Button>
              <Button className="w-1/4 bg-red-500 py-7 rounded-xl shadow flex flex-col items-center gap-1">
                <Heading size={'lg'} className="font-bold uppercase">
                  <CartIcon color="white" />
                </Heading>
                <Text textStyle={'xs'} className="text-white">
                  Thêm vào giỏ
                </Text>
              </Button>
            </HStack>
            <HStack className="py-1">
              <Button className="flex-1 py-7 rounded-xl shadow flex flex-col items-center gap-0">
                <Heading size={'lg'} className="text-white font-bold uppercase">
                  Mua Trả góp
                </Heading>
                <Text textStyle={'xs'} className="text-white">
                  Duyệt hồ sơ trong 5 phút
                </Text>
              </Button>
              <Button className="flex-1 py-7 rounded-xl shadow flex flex-col items-center gap-0">
                <Heading size={'lg'} className="font-bold uppercase">
                  Trả góp qua thẻ
                </Heading>
                <Text textStyle={'xs'} className="text-white">
                  Visa, MasterCard, JCB, Amex
                </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>

      {/* specification */}
      <Box className="mt-4 py-2 px-2 border shadow rounded-xl">
        <AccordionRoot multiple defaultValue={['1']}>
          {items.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger className="py-4">
                <Heading
                  size={'lg'}
                  className=" text-neutral-800 font-bold uppercase"
                >
                  {item.title}
                </Heading>
              </AccordionItemTrigger>
              <AccordionItemContent>{item.text}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>
      <Box className="my-4 px-2 rounded-xl overflow-hidden border shadow">
        <Box className="py-2">
          <Heading
            size={'lg'}
            className=" text-neutral-800 font-bold uppercase"
          >
            Đánh giá và nhận xét
          </Heading>
        </Box>
        <Box className="py-2">
          <OverallReview
            rate={details.overallReviews.rate}
            customerTotal={details.overallReviews.customerTotal}
            reviewTotal={details.overallReviews.reviewTotal}
          />
          <VStack className="w-full mt-4" separator={<Separator />}>
            {details.reviews.map(review => (
              <ReviewCard
                key={review.id}
                id={review.id}
                user={review.user}
                content={review.content}
                likeNumber={review.like}
                boughtAt={review.boughtAt}
                rate={review.rate}
              />
            ))}
          </VStack>
        </Box>
        <HStack className="py-2" gap={0}>
          <Box className="w-1/2 p-1">
            <Button className="w-full" variant={'outline'}>
              Xem {details.overallReviews.reviewTotal} đánh giá
            </Button>
          </Box>

          <Box className="w-1/2 p-1">
            <Button className="w-full" variant={'solid'} colorPalette={'blue'}>
              Viết đánh giá
            </Button>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
