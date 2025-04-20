import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBar from '../../../components/bars/customBar';
import colors from '@/src/app/constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import Ubaazar from '@/src/app/components/text/ubaazar';

const AboutScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={'About us'} />

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Ubaazar size={30} />
        </View>
        <View
          style={{
            paddingBottom: 100,
            paddingHorizontal: 12,
          }}>
          <Text style={styles.text}>
            At UBAAZAR, we believe that every woman deserves to celebrate her
            unique beauty and heritage. We've created a digital haven where the
            timeless elegance of Indian fashion meets the convenience of modern
            technology. Our app is more than just a marketplace; it's a
            celebration of the rich tapestry of Indian culture, woven into every
            saree, suit, and lehenga we offer.
          </Text>

          <Text style={styles.heading}>
            Our Story: A Journey of Heritage and Style
          </Text>
          <Text style={styles.text}>
            Our journey began with a deep appreciation for the artistry and
            craftsmanship that defines Indian women's wear. Inspired by the
            vibrant colors, intricate designs, and timeless silhouettes that
            have been passed down through generations, we set out to create a
            platform where these treasures could be easily discovered and
            cherished. We wanted to bring the warmth of a traditional Indian
            boutique to the fingertips of women everywhere, offering a curated
            collection that reflects both tradition and contemporary style.
          </Text>
          <Text style={styles.heading}>
            Our Mission: Celebrating Your Unique Beauty
          </Text>
          <Text style={styles.text}>
            Our mission is to empower women to embrace their cultural roots
            while expressing their individuality. We strive to provide a
            seamless and enjoyable shopping experience, offering a diverse range
            of high-quality Indian wear that caters to every taste and occasion.
            From the graceful drape of a silk saree to the modern elegance of a
            designer suit, we believe that every piece should make you feel
            confident, radiant, and authentically you.
          </Text>
          <Text style={styles.heading}>
            Our Values: Tradition, Quality, and Trust
          </Text>
          <Text style={styles.text}>
            We are committed to upholding the values that define Indian culture:
            respect, integrity, and a deep sense of community. We prioritize
            quality in every aspect of our business, from the sourcing of
            fabrics to the craftsmanship of our garments. We believe in building
            lasting relationships with our customers, based on trust and
            transparency.
          </Text>
          <Text style={styles.heading}>
            Our Collection: A Symphony of Styles
          </Text>
          <Text style={styles.text}>
            Our collection is a carefully curated symphony of styles, featuring
            a wide range of sarees, suits, lehengas, and more. We work with
            skilled artisans and designers from across India to bring you the
            finest fabrics, intricate embroideries, and stunning designs.
            Whether you're looking for a traditional bridal lehenga, a festive
            saree, or a stylish everyday suit, you'll find something to cherish
            in our collection.
          </Text>
          <Text style={styles.heading}>
            Join Our Community: Celebrate Your Heritage
          </Text>
          <Text style={styles.text}>
            We invite you to join our community of women who celebrate their
            heritage and embrace their unique style. Discover the magic of
            Indian fashion. Let us help you create moments of beauty, grace, and
            timeless elegance.
          </Text>

          <Text style={styles.heading}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any query or complains, You can contact
            us:
          </Text>
          <Text style={styles.text}>
          By phone number: +91 9675965303
          </Text>
          <Text style={styles.text}>
          By email: priyanshmah@gmail.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Metropolis-Regular',
    color: colors.lightGrayColor,
    fontSize: 14,
    padding: 12,
    textAlign: 'justify',
  },
  heading: {
    fontSize: 20,
    color: colors.brightOrange,
    fontFamily: 'Metropolis-SemiBold',
    paddingVertical: 12,
  },
});
