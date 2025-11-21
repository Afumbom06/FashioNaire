import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ContactProps {
  language: 'en' | 'fr';
  theme: 'light' | 'dark';
}

export default function Contact({ language, theme }: ContactProps) {
  const content = {
    en: {
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear from you',
      formTitle: 'Send us a Message',
      formDescription: 'Fill out the form below and we\'ll get back to you soon',
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send Message',
      contactInfo: 'Contact Information',
      locations: 'Our Locations',
      hours: 'Business Hours',
      appointment: 'Book an Appointment',
      locations_list: [
        {
          name: 'Flagship Atelier - Yaoundé',
          address: 'Bastos Quarter, Avenue Kennedy, Yaoundé, Cameroon',
          phone: '+237 6 99 12 34 56'
        },
        {
          name: 'Douala Showroom',
          address: 'Akwa District, Rue Joss, Douala, Cameroon',
          phone: '+237 6 99 12 34 57'
        }
      ],
      hours_list: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      social: 'Follow Us'
    },
    fr: {
      title: 'Contactez-Nous',
      subtitle: 'Nous serions ravis de vous entendre',
      formTitle: 'Envoyez-nous un Message',
      formDescription: 'Remplissez le formulaire ci-dessous et nous vous répondrons bientôt',
      name: 'Votre Nom',
      email: 'Votre Email',
      phone: 'Numéro de Téléphone',
      message: 'Votre Message',
      send: 'Envoyer',
      contactInfo: 'Informations de Contact',
      locations: 'Nos Emplacements',
      hours: 'Heures d\'Ouverture',
      appointment: 'Réserver un Rendez-vous',
      locations_list: [
        {
          name: 'Atelier Principal - Yaoundé',
          address: 'Quartier Bastos, Avenue Kennedy, Yaoundé, Cameroun',
          phone: '+237 6 99 12 34 56'
        },
        {
          name: 'Showroom Douala',
          address: 'Quartier Akwa, Rue Joss, Douala, Cameroun',
          phone: '+237 6 99 12 34 57'
        }
      ],
      hours_list: [
        'Lundi - Vendredi : 9h00 - 18h00',
        'Samedi : 10h00 - 16h00',
        'Dimanche : Fermé'
      ],
      social: 'Suivez-Nous'
    }
  };

  const t = content[language];

  return (
    <div className={`min-h-screen pt-32 pb-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-4">{t.title}</h1>
          <p className="text-xl text-gray-500">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <CardTitle className="text-2xl">{t.formTitle}</CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-400' : ''}>
                  {t.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.name}</Label>
                    <Input id="name" type="text" placeholder={t.name} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.email}</Label>
                    <Input id="email" type="email" placeholder={t.email} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input id="phone" type="tel" placeholder="+237..." className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.message}</Label>
                    <Textarea id="message" placeholder={t.message} rows={5} className="mt-2" />
                  </div>
                  <Button className="w-full" size="lg">
                    {t.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Locations */}
            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-600" size={24} />
                  <CardTitle>{t.locations}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.locations_list.map((location, index) => (
                  <div key={index} className="pb-4 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-700">
                    <h4 className="mb-2">{location.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{location.address}</p>
                    <p className="text-sm text-amber-600">{location.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <CardTitle>{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p>+237 6 99 12 34 56</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p>contact@afriquecouture.cm</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="text-amber-600" size={24} />
                  <CardTitle>{t.hours}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {t.hours_list.map((hour, index) => (
                    <p key={index} className="text-sm">{hour}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointment Button */}
            <Button className="w-full" size="lg" variant="outline">
              {t.appointment}
            </Button>

            {/* Social Media */}
            <div className="text-center pt-6">
              <p className="mb-4 text-gray-600 dark:text-gray-400">{t.social}</p>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-lg overflow-hidden"
        >
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <p className="text-gray-500">{language === 'en' ? 'Map view - Yaoundé, Cameroon' : 'Vue de la carte - Yaoundé, Cameroun'}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
